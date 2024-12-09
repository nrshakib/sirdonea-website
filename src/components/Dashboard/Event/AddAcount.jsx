"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import DirectDeposit from "./DirectDeposit";
import Check from "./Check";

const AddAccount = () => {
  const searchParams = useSearchParams();
  const [method, setMethod] = useState(null);

  useEffect(() => {
    const methodParam = searchParams.get("method");
    setMethod(methodParam);
  }, [searchParams]);

  if (!method) {
    return <div>Loading...</div>; // Loading state while the method is being fetched
  }

  return (
    <div className="lg:w-[70%] mx-auto p-6 pb-16 bg-white">
      {method === "direct-deposit" ? <DirectDeposit /> : <Check />}
    </div>
  );
};

const AddAccountWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AddAccount />
  </Suspense>
);

export default AddAccountWrapper;
