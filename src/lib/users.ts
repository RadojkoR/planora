import {db} from "./db";
import { RowDataPacket } from "mysql2";

interface NewUserProp {
    company_name: string;
    company_slug: string;
    user_email: string;
    user_password: string;
  }

  export async function saveUser(user: NewUserProp ) {
    const insertUserQuery = `INSERT INTO users (company_name, company_slug, user_email, user_password) 
        VALUES (?, ?, ?, ?)`

        const values = [
            user.company_name,
            user.company_slug,
            user.user_email,
            user.user_password,
          ];
        
          try {
            console.log("Upisujem u bazu:", values);
            await db.execute(insertUserQuery, values);
            console.log("Uspešan upis u bazu.");
          } catch (error) {
            console.error("Greška pri upisu u bazu:", error);
            throw error;
          }
  }

  export async function getUser(slug: string) {
    const companySlugQuery = 'SELECT * FROM users WHERE company_slug = ? LIMIT 1';
    const [rows] = await db.execute<RowDataPacket[]>(companySlugQuery, [slug]);
    return rows[0] || null
  }

  export async function getUserByEmail(email: string) {
    const result = await db.query("SELECT * FROM users WHERE user_email = ?", [email]);

    const rows = result[0] as RowDataPacket[]

    return rows[0]
  }