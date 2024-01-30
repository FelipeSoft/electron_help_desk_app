import { Image } from "lucide-react"
import { useState } from "react";

export const ImageUploader = () => {
    const [image, setImage] = useState<any>(null);

    const handleChooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            let file = e.target.files[0]
            const reader = new FileReader();

            reader.onload = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <label className={`flex flex-col items-center justify-center focus-within:border-blue-500 outline-none w-full h-36 border-2 border-dashed rounded-lg p-6 ${image && "border-none p-0"}`}>
                <input type="file" className="opacity-0" onChange={handleChooseImage} />
                {!image ? (
                    <>
                        <Image strokeWidth={1} className="text-blue-500 w-20 h-20" />
                        <h2 className="text-slate-700 font-semibold">Selecione uma <span className="text-blue-500 font-semibold">imagem</span> ou <span className="text-blue-500 font-semibold">fotografia</span>.</h2>
                        <small className="text-xs text-gray-500">Extensões compatíveis: JPG, JPEG e PNG</small>
                    </>
                ) : (
                    <img src={image} className="h-36 w-full object-cover rounded-lg" alt="" />
                )}
            </label>
            <small className="text-gray-500">
                A imagem inserida será automaticamente ajustada para garantir uma exibição adequada.
                <br/> Não se preocupe com o formato da imagem, pois cuidaremos desse detalhe para você.
            </small>
        </div>
    )
}