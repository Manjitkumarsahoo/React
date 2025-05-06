import { useState } from "react";
import Emp from "./Emp";
import EmpList from "./EmpList";
import EmpPortal from "./EmpPortal";

export default function EmpApp() {
    const [selectEmp, setSelectEmp] = useState("");

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <EmpPortal />
                </div>
                <div className="row mt-2">
                    <div className="col-8">
                        <EmpList callFn={setSelectEmp} />
                    </div>
                    <div className="col-4">
                        <Emp showEmp={selectEmp} />
                    </div>
                </div>
            </section>
        </>
    );
}
