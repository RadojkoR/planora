import bcrypt from 'bcrypt';

export async function hashPassword(password:string) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds)
}

export async function comparePassword(plainPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainPassword, hashedPassword)
}