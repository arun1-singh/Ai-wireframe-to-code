import "dotenv/config";
import Constants from "@/app/data/Constants";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: "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",
})

export async function POST(req: NextRequest) {

    const {model,description,imageUrl}= await req.json();

    const ModelObj=Constants.AiModelList.find(item=>item.name==model);
   const modelName=ModelObj?.modelName;
   console.log(modelName);


    const response = await openai.chat.completions.create({
            model: modelName ?? 'google/gemini-2.0-pro-exp-02-05:free',
            stream: true,
            messages: [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": description
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": imageUrl
                        }
                    }
                    ]
                }
            ]
        });

        const stream = new ReadableStream({
            async start(controller) {
                for await(const chunk of response) {
                    const text = chunk.choices?.[0]?.delta?.content || "";
                    controller.enqueue(new TextEncoder().encode(text));
                 
                }
                controller.close();
            },
        });
    
        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            
            },
        });
}

