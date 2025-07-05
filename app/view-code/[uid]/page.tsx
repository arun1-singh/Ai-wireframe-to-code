// "use client"
// import AppHeader from '@/app/_components/AppHeader'
// import Constants from '@/app/data/Constants'
// import axios from 'axios'
// import { Loader2, LoaderCircle } from 'lucide-react'
// import { useParams, usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import SelectionDetail from './_components/SelectionDetail'
// import CodeEditor from './_components/CodeEditor'

// export interface RECORD {
//   id: number,
//   description: string,
//   code: any,
//   imageUrl: string,
//   model: string,
//   createdBy: string,
//   uid: string
// }

// function ViewCode() {

//   const { uid } = useParams();
//   const [loading, setLoading] = useState(false);
//   const [codeResp, setCodeResp] = useState('');
//   const [record, setRecord] = useState<RECORD | null>();
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       uid && GetRecordInfo();
//     }
//   }, [uid]);

//   const GetRecordInfo = async () => {
//     console.log("RUN...")
//     setIsReady(false);
//     setCodeResp('');
//     setLoading(true);

//     const result = await axios.get('/api/wireframe-to-code?uid=' + uid)
//     console.log(result.data);


//     const resp = result?.data;
//     setRecord(result?.data);

//     if (resp?.code == null) {
//       GenerateCode(resp);
//     }
//     else {
//       setCodeResp(resp?.code?.resp);
//       setLoading(false);
//       setIsReady(true);
//     }
//     if (resp?.error) {
//       console.log("No Record Found")
//     }
//     // setLoading(false);
//   }

//   const GenerateCode = async (record: RECORD) => {

//     setLoading(true);
//     const res = await fetch('/api/ai-model', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         description: record?.description + ":" + Constants.GENERATE_CODE_PROMPT,
//         model: record?.model,
//         imageUrl: record?.imageUrl
//       })
//     });

//     if (!res.body) return;
//     setLoading(false);
//     const reader = res.body.getReader();
//     const decoder = new TextDecoder();
//     while (true) {
//       const { done, value } = await reader.read();
//       if (done) break;

//       const text = (decoder.decode(value)).replace('```tsx', '').replace('```javascript', '');
//       setCodeResp((prev) => prev + text);
//       console.log(text);

//     }

//     setIsReady(true);
//     UpdateCodeToDb();
//   }

//   useEffect(() => {
//     if (codeResp != '' && record?.uid && isReady && record?.code == null) {
//       UpdateCodeToDb();
//     }
//   }, [codeResp && record && isReady])


//   const UpdateCodeToDb = async () => {
//     console.log(record);
//     const result = await axios.put('/api/wireframe-to-code', {
//       uid: record?.uid,
//       codeResp: { resp: codeResp }

//     });

//     console.log(result);
//   }



//   return (
//     <div>
//       <AppHeader hideSidebar={true} />
//       <div className='grid grid-cols-1 md:grid-cols-5 p-5 gap-10'>
//         <div>
//           <SelectionDetail record={record} regenerateCode={() => GetRecordInfo()} isReady={isReady}

//           />
//         </div>
//         <div className='col-span-4'>
//           {loading ? <div><h2 className='font-bold text-2xl text-center p-20 flex items-center justify-center
//       bg-slate-100 h-[80vh] rounded-xl
//       '> <Loader2 className='animate-spin' /> Analyzing the Wireframe...</h2></div> :

//             <CodeEditor codeResp={codeResp} isReady={isReady}
//             />
//           }
//         </div>
//       </div>
//       {/* Selection Details */}


//       {/* Code Editor*/}
//     </div>
//   )
// }

// export default ViewCode

// "use client";

// import AppHeader from "@/app/_components/AppHeader";
// import Constants from "@/app/data/Constants";
// import axios from "axios";
// import { Loader2 } from "lucide-react";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import SelectionDetail from "./_components/SelectionDetail";
// import CodeEditor from "./_components/CodeEditor";

// export interface RECORD {
//   id: number;
//   description: string;
//   code: any;
//   imageUrl: string;
//   model: string;
//   createdBy: string;
//   uid: string;
// }

// function ViewCode() {
//   const { uid } = useParams();
//   const [loading, setLoading] = useState(false);
//   const [codeResp, setCodeResp] = useState("");
//   const [record, setRecord] = useState<RECORD | null>(null);
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     if (uid) {
//       GetRecordInfo();
//     }
//   }, [uid]);

//   const GetRecordInfo = async () => {
//     setIsReady(false);
//     setCodeResp("");
//     setLoading(true);

//     try {
//       const result = await axios.get(`/api/wireframe-to-code?uid=${uid}`);
//       console.log("API Response:", result.data);

//       const resp = result?.data;
//       setRecord(resp);

//       if (resp?.code == null) {
//         GenerateCode(resp);
//       } 
      
      
    
//       else {
//         setCodeResp(resp?.code?.resp || "");
//         setLoading(false);
//         setIsReady(true);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   const GenerateCode = async (record: RECORD) => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/ai-model", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           description: record?.description + ":" + Constants.GENERATE_CODE_PROMPT,
//           model: record?.model,
//           imageUrl: record?.imageUrl,
//         }),
//       });

//       if (!res.body) return;

//       const reader = res.body.getReader();
//       const decoder = new TextDecoder();
//       let newCode = "";

//       while (true) {
//         const { done, value } = await reader.read();
//         if (done) break;

//         const text = decoder.decode(value).replace("```javascript", "").replace("```", "");
//         newCode += text;
//         setCodeResp((prev) => prev + text);
//         console.log(text);
//       }

//       setIsReady(true);
//       UpdateCodeToDb(newCode);

//     } catch (error) {
//       console.error("Error generating code:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (codeResp != '' && record?.uid && isReady && record?.code == null) {
//       UpdateCodeToDb(codeResp);
//     }
//   }, [codeResp, record, isReady]);

//   const UpdateCodeToDb = async (newCode: string) => {
//     if (!record?.uid) return;
//     try {
//       const result = await axios.put("/api/wireframe-to-code", {
//         uid: record.uid,
//         codeResp: { resp: newCode },
//       });
//       console.log("Updated DB:", result);
//     } catch (error) {
//       console.error("Error updating DB:", error);
//     }
//   };

//   return (
//     <div>
//       <AppHeader hideSidebar={true} />
//       <div className="grid grid-cols-1 md:grid-cols-5 p-5 gap-10">
//         <div>
//           <SelectionDetail record={record} regenerateCode={GetRecordInfo} isReady={isReady} />
//         </div>
//         <div className="col-span-4">
//           {loading ? (
//             <div className="flex items-center justify-center h-[80vh] bg-slate-100 rounded-xl">
//               <h2 className="font-bold text-2xl text-center p-20 flex items-center gap-2">
//                 <Loader2 className="animate-spin" /> Analyzing the Wireframe...
//               </h2>
//             </div>
//           ) : (
//             <CodeEditor codeResp={codeResp} isReady={isReady} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewCode;

"use client";

import AppHeader from "@/app/_components/AppHeader";
import Constants from "@/app/data/Constants";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SelectionDetail from "./_components/SelectionDetail";
import CodeEditor from "./_components/CodeEditor";

export interface RECORD {
  id: number;
  description: string;
  code: any;
  imageUrl: string;
  model: string;
  createdBy: string;
  uid: string;
}

function ViewCode() {
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const [codeResp, setCodeResp] = useState("");
  const [record, setRecord] = useState<RECORD | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (uid) {
      GetRecordInfo();
    }
  }, [uid]);

  // Fetch Record & Regenerate if Needed
  const GetRecordInfo = async (forceRegenerate = false) => {
    setIsReady(false);
    setCodeResp("");
    setLoading(true);

    try {
      const result = await axios.get(`/api/wireframe-to-code?uid=${uid}`);
      console.log("API Response:", result.data);

      const resp = result?.data;
      setRecord(resp);

      // Regenerate if forced OR no existing code
      if (forceRegenerate || resp?.code == null) {
        GenerateCode(resp);
      } else {
        setCodeResp(resp?.code?.resp || "");
        setLoading(false);
        setIsReady(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Generate Code
  const GenerateCode = async (record: RECORD) => {
    setLoading(true);
    try {
      const res = await fetch("/api/ai-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: record?.description + ":" + Constants.GENERATE_CODE_PROMPT,
          model: record?.model,
          imageUrl: record?.imageUrl,
        }),
      });

      if (!res.body) return;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let newCode = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value).replace("```javascript", "").replace("```", "");
        newCode += text;
        setCodeResp((prev) => prev + text);
        console.log(text);
      }

      setIsReady(true);
      UpdateCodeToDb(newCode);
    } catch (error) {
      console.error("Error generating code:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update the new code in DB
  const UpdateCodeToDb = async (newCode: string) => {
    if (!record?.uid) return;
    try {
      const result = await axios.put("/api/wireframe-to-code", {
        uid: record.uid,
        codeResp: { resp: newCode },
      });
      console.log("Updated DB:", result);

      // Ensure fresh data is fetched after update
      setTimeout(() => {
        GetRecordInfo();
      }, 1000);
    } catch (error) {
      console.error("Error updating DB:", error);
    }
  };

  return (
    <div>
      <AppHeader hideSidebar={true} />
      <div className="grid grid-cols-1 md:grid-cols-5 p-5 gap-10">
        <div>
          {/* Pass force regenerate function */}
          <SelectionDetail record={record} regenerateCode={() => GetRecordInfo(true)} isReady={isReady} />
        </div>
        <div className="col-span-4">
          {loading ? (
            <div className="flex items-center justify-center h-[80vh] bg-slate-100 rounded-xl">
              <h2 className="font-bold text-2xl text-center p-20 flex items-center gap-2">
                <Loader2 className="animate-spin" /> Analyzing the Wireframe...
              </h2>
            </div>
          ) : (
            <CodeEditor codeResp={codeResp} isReady={isReady} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewCode;
