export const envs = {
  DATABASE_HOST: process.env.DATABASE_HOST as string,
  DATABASE_PORT: process.env.DATABASE_PORT as string,
  DATABASE_NAME: process.env.DATABASE_NAME as string,
  DATABASE_USER: process.env.DATABASE_USER as string,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD as string,
  DATABASE_TYPE: process.env.DATABASE_TYPE as string,
  TOKEN_HASH: process.env.TOKEN_HASH as string,
  EMAIL_SECRET: process.env.EMAIL_SECRET as string,
  EMAIL_USER: process.env.EMAIL_USER as string,
  ADMIN_USERNAME: process.env.ADMIN_USERNAME as string,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD as string,
  API_URL: process.env.NEXT_PUBLIC_API_URL as string,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL as string,
  DISCORD_AUTHORIZATION: process.env
    .NEXT_PUBLIC_DISCORD_AUTHORIZATION as string,
  DISCORD_CLIENT_ID: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID as string,
  DISCORD_SECRET: process.env.NEXT_PUBLIC_DISCORD_SECRET as string,
  STORAGE_KEY_LANG: process.env.NEXT_PUBLIC_STORAGE_KEY_LANG as string,
  STORAGE_KEY_USER: process.env.NEXT_PUBLIC_STORAGE_KEY_USER as string,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET as string,
  EVEN_TOKEN: process.env.EVEN_TOKEN as string,
  EVEN_MEMBER_ROLE: process.env.EVEN_MEMBER_ROLE as string,
  NASA_API_KEY: process.env.NEXT_PUBLIC_NASA_API_KEY as string,
  NASA_API_URL: process.env.NEXT_PUBLIC_NASA_API_URL as string,
  EVEN_GUILD_ID: process.env.EVEN_GUILD_ID as string,
  WEBHOOK_GITHUB_PORT: process.env.WEBHOOK_GITHUB_PORT as string,
  EVEN_WEBHOOK_LOGGER: process.env.EVEN_WEBHOOK_LOGGER as string,
};
