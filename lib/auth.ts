import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./zod";
import { ZodError } from "zod";
import { prisma } from "./prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                try {
                    const { email } = await signInSchema.parseAsync(credentials);
                    
                    const user = await prisma.user.findUnique({
                        where: { email },
                    });

                    if (!user) {
                        throw new Error("User not found");
                    }

                    return user;
                } catch (error) {
                    if (error instanceof ZodError) {
                        return null;
                    }
                    throw error;
                }
            },
        }),
    ],
});

