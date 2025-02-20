import { openai } from '@ai-sdk/openai';
import { createOllama } from "ollama-ai-provider";

const modelAdapter = process.env.OLLAMA_BASE_URL ? createOllama({
    baseURL: process.env.OLLAMA_BASE_URL!,
}) : openai;

export function getModel(name: string) {
    return process.env.MODEL_NAME ? modelAdapter(process.env.MODEL_NAME) : modelAdapter(name);
}

export function getEmbeddingModel(name: string) {
    return process.env.MODEL_EMBEDDING_NAME ? modelAdapter.embedding(process.env.MODEL_EMBEDDING_NAME) : modelAdapter.embedding(name);
}
