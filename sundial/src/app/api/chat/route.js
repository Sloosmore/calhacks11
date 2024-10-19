import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request) {
  const { messages } = await request.json();

  // Convert the messages array to the format expected by Groq
  const formattedMessages = messages.map((msg) => ({
    role: msg.isUser ? "user" : "assistant",
    content: msg.content,
  }));

  const completion = await groq.chat.completions.create({
    messages: formattedMessages,
    model: "llama3-8b-8192",
  });

  const response = completion.choices[0].message.content;

  console.log(completion);

  return NextResponse.json({ response });
}
