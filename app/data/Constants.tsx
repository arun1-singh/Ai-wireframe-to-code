import dedent from 'dedent';

export default {
 
    GENERATE_CODE_PROMPT: dedent`  
You are an expert front-end developer specializing in converting UI wireframes into high-quality, production-ready React components.

### **Instructions:**
- Use **React 18+** with **functional components** and hooks.
- Write **valid, error-free JSX** in **JavaScript (.js) format**.
- Style using **Tailwind CSS** for responsiveness and consistency.
- Ensure **accessibility** (use ARIA attributes where needed).
- Keep the component **modular, reusable, and maintainable**.
- **Avoid:** unnecessary dependencies, inline styles, or complex logic.
- **Return only the complete React component**—no explanations, comments, or additional text.
- **Do not use TypeScript (.tsx) or any TypeScript-specific syntax.**
- **Ensure the output is immediately usable in a React project without modification.**
  `



,
     AiModelList :[
        {
            name: 'Gemini Google',
            icon: '/google.png',
            modelName:"google/gemini-2.0-pro-exp-02-05:free"
        },
        {
            name: 'llama By Meta',
            icon: '/meta.png',
            modelName:"meta-llama/llama-3.2-90b-vision-instruct"
        },
        {
            name: 'Deepseek',
            icon: '/deepseek.png',
            modelName:"deepseek/deepseek-r1-distill-llama-70b"
            
     }
   ],
   DEPENDANCY: {

    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    autoprefixer : "^10.0.0",
    "uuid4": "^2.0.3",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7",
    "lucide-react": "^0.469.0",
    "react-router-dom": "^7.1.1",
    "firebase": "^11.1.0",
    "@google/generative-ai": "^0.21.0",
    "date-fns": "^4.1.0",
    "react-chartjs-2": "^5.3.0",
    "chart.js": "^4.4.7"
   },
};


// GENERATE_CODE_PROMPT: dedent`
        // You are an expert front-end developer skilled in converting UI wireframes into high-quality React code.
        // Your task is to generate a clean, maintainable, and responsive React component based on the given wireframe and description.

        // **Instructions:**
        // - Use modern React practices (React 18+ with functional components and hooks).
        // - Use Javascript(.js) as the language for the React Component.
        // - Utilize Tailwind CSS for styling.
        // - Ensure accessibility (ARIA attributes where necessary).
        // - Keep the component modular and reusable.
        // - Avoid unnecessary dependencies or inline styles.
        // - Return only the code without explanations.
        // - Do Not Start With \\\`jsx or \\\`typsescript or \\\`javascript or \\\`tsx

        // **Input Example:**
        // - Wireframe: (A simple card component with an image, title, and description)
        // - Description: "A card with a product image, title, and a short description."

        // **Expected Output Example:**
        
        // import React from "react";

        // const ProductCard = ({ image, title, description }) => {
        //     return (
        //         <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
        //             <img className="w-full h-40 object-cover" src={image} alt={title} />
        //             <div className="mt-4">
        //                 <h2 className="text-lg font-bold">{title}</h2>
        //                 <p className="text-gray-600">{description}</p>
        //             </div>
        //         </div>
        //     );
        // };

        // export default ProductCard;
        // Now, generate the corresponding React code based on the provided wireframe and description.`