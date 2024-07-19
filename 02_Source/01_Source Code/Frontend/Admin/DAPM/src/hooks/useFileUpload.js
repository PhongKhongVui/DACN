import { useEffect, useRef, useState } from "react";
import { request } from "../services/axios";
import { toast } from "react-toastify";

function useFileUpload() {
    const [url, setUrl] = useState(null);
    const [id, setId] = useState(null);
    const inputRef = useRef(null);
    const oldIdRef = useRef(null);
    const lockRef = useRef(null);

    useEffect(() => {
        if (lockRef.current) return;
        lockRef.current = true;

        inputRef.current.addEventListener("change", () => {
            if (inputRef.current.files.length == 0) return;
            const image = inputRef.current.files[0];
            const data = new FormData();
            data.append("image", image, image.name);

            request.post("/images", data, {
                headers: {
                    accept: "application/json",
                    "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                },
            }).then((res) => {
                console.log(res);
                setUrl(res.data.url);
                setId(res.data.id);
            }).catch((error) => {
                toast.error("Upload failed, try again later!");
            })
        });
    }, []);

    useEffect(() => {
        if (id != null) {
            request.delete("/images/" + oldIdRef.current).then(() => {
                console.log("Delete success");
            }).finally(() => {
                oldIdRef.current = id;
            })
        }
    }, [url])

    const reset = () => {
        setUrl(null);
        setId(null);
    }

    return [inputRef, url, id, reset];
}

export default useFileUpload;