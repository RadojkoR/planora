'use server';

import slugify from "slugify";
import { getUserByEmail, saveUser } from "./users";
import { redirect } from "next/navigation";
import { comparePassword, hashPassword } from "./password";

import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";


// SIGNUP FORM ACTION
export async function signupFormData(formData: FormData){
    const companyNameRaw = formData.get('company_name');
    const userEmail = formData.get('email');
    const userPassword = formData.get('password');
    

    if (
        typeof companyNameRaw !== 'string' ||
        typeof userEmail !== 'string' ||
        typeof userPassword !== 'string'
      ) {
        throw new Error('Sva polja su obavezna i moraju biti stringovi');
      }

      const hashedPassword = await hashPassword(userPassword)

    const user = {
        company_name:companyNameRaw,
        company_slug: slugify(companyNameRaw, {lower:true, strict: true }),
        user_email: userEmail,
        user_password: hashedPassword
    }
    await saveUser(user);
    redirect(`/${user.company_slug}`)
  }

//   SIGNIN FORM ACTION
export async function loginFormAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (typeof email !== 'string' || typeof password !== 'string') {
        throw new Error('Email i lozinka su obavezni');
      }

      const user = await getUserByEmail(email);
      if (!user) {
        throw new Error('Ne postoji korisnik sa datim emailom');
      }

      console.log("Entered password:", password);
console.log("Hashed from DB:", user.user_password);
      const isValid = await comparePassword(password, user.user_password);
  if (!isValid) {
    throw new Error('Pogrešna lozinka');
  }

  redirect(`/${user.company_slug}/dashboard`);
}