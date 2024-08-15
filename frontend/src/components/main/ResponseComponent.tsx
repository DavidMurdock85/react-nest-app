import { useEffect, useState } from "react";
import { fetchResponse } from "../../services/fetchResponseService";

const ResponseComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const getMessage = async () => {
      const data = await fetchResponse();
      setMessage(data);
    };

    getMessage();
  }, []);

  return (
    <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
      <h1 className="flex flex-row justify-center text-2xl font-bold mb-4">
        Backend Response:
      </h1>
      <p className="flex flex-row justify-center">{message}</p>
      <button className="flex flex-row justify-center btn btn-primary">
        Click Me!
      </button>
    </div>
  );
};

export default ResponseComponent;
