import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request) {
  const { message } = await request.json();

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    model: "llama3-8b-8192",
  });

  const response = completion.choices[0].message.content;

  console.log(completion);

  return NextResponse.json({ response });
}
