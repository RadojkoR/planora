// 'use server';

// import slugify from "slugify";
// import { saveUser } from "./users";
// import { redirect } from "next/navigation";
// import { hashPassword } from "./password";


// // import slugify from "slugify";

// export async function signupFormData(formData: FormData){
//     const companyNameRaw = formData.get('company_name');
//     const userEmail = formData.get('email');
//     const userPassword = formData.get('password');
    

//     if (
//         typeof companyNameRaw !== 'string' ||
//         typeof userEmail !== 'string' ||
//         typeof userPassword !== 'string'
//       ) {
//         throw new Error('Sva polja su obavezna i moraju biti stringovi');
//       }

//       const hashedPassword = await hashPassword(userPassword)

//     const user = {
//         company_name:companyNameRaw,
//         company_slug: slugify(companyNameRaw, {lower:true, strict: true }),
//         user_email: userEmail,
//         user_password: hashedPassword
//     }
//     await saveUser(user);
//     redirect(`/${user.company_slug}`)
//   }