import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
providers: [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "email", type: "email", placeholder: "ejemplo@test.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com", error: "Soy un error" }
      
      //HAGO EL FETCH PERO NO TENGO UNA API CON USUARIOS
     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        }),
        headers: { "Content-Type": "application/json"}
      }
     );
     const user2 = await res.json();
     console.log(user)
     console.log(user2)
     if (user.error) throw user;

        return user;
    }
  })
]
})

export { handler as GET, handler as POST}