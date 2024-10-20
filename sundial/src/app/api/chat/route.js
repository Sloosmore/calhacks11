import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { system_prompt } from "./prompt";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request) {
  const { messages } = await request.json();

  // Convert the messages array to the format expected by Groq
  const formattedMessages = messages.map((msg) => ({
    role: msg.isUser ? "user" : "assistant",
    content: msg.content,
  }));

  // Add the system prompt at the beginning of the messages array
  const messagesWithSystemPrompt = [
    { role: "system", content: system_prompt },
    ...formattedMessages,
  ];

  const completion = await groq.chat.completions.create({
    messages: messagesWithSystemPrompt,
    model: "llama3-8b-8192",
  });

  const response = completion.choices[0].message.content;

  console.log(completion);

  return NextResponse.json({ response });
}
