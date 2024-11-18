import { Job, Language } from "../types/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props: {
  job: Job;
  lang: Language;
  onClose: () => void;
}) {
  const downloadPDF = () => {
    const element = document.createElement("a");
    element.href = props.job.EmployeeReferences!;
    element.download = "EmployeeReferences.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center backdrop-blur ">
      <div className="bg-[#16222a] w-3/4 md:w-1/2 lg:w-1/3 lg:min-h-1/3 p-4 relative rounded border border-[#ffa001] shadow-[0_0_10px_#ffa001] ">
        <button className="absolute top-1 right-2" onClick={props.onClose}>
          <FontAwesomeIcon icon={faXmark} className=" h-8" />
        </button>
        <div className="flex flex-col h-full">
          <div className="p-2 items-start">
            <h2 className="font-bold text-lg pt-2">{props.job.Company}</h2>
            <p className="pb-2 text-[#444955]">{props.job.Belonging}</p>
          </div>
          <div className="flex flex-col justify-between h-full p-2">
            <p>{props.job.Description[props.lang]}</p>
            <div className="flex pt-3 gap-3 lg:gap-0 w-full flex-col-reverse lg:flex-row justify-between items-start lg:items-end">
              <div className="flex gap-2 flex-wrap ">
                {props.job.Stack.map((tech, index) => (
                  <p
                    key={index}
                    className="flex  rounded-full px-2 py-0.5 border bg-[#363b45]/50 border-blue-600/50"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              {props.job.EmployeeReferences && (
                <button
                  className="bg-[#ffa001] text-[#16222a] rounded px-3 py-1"
                  onClick={downloadPDF}
                >
                  Employee references
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
