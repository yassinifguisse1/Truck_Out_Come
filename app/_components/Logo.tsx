import React from "react";
import { Rocket } from "lucide-react";


const Logo = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {/* <Link href="/" className="flex items-center space-x-2"> */}
        <Rocket className="h-8 w-8 text-violet-600" />
        <span className="text-lg font-semibold">
          Track{" "}
          <span className="text-violet-600  ">
             |OutCome
          </span>
        </span>
       
    </div>
  );
};

export default Logo;
