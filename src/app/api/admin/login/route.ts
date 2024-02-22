import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { SHA256 } from "crypto-js";

const secret = new TextEncoder().encode(process.env.JWT_KEY as string);
const alg = "HS256";

const createToken = async (email: string, userId: number) => {
  return await new SignJWT({ email, userId, isAdmin: true })
    .setProtectedHeader({ alg })
    .setExpirationTime("48h")
    .sign(secret);
};

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "email and password required" },
        { status: 400 },
      );
    }

    const user = await prisma.admin.findUnique({
      where: {
        email,
        password: SHA256(password).toString(),
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 404 },
      );
    } else {
      const token = await createToken(user.email, user.id);
      cookies().set("access_token", token);

      return NextResponse.json(
        {
          access_token: token,
          userInfo: {
            id: user.id,
            email: user.email,
          },
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("an error occurred", error);
    throw error;
  }
}
