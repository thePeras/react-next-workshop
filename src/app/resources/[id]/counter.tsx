"use client";

import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    resourceId: string;
}

{/* Tarefa #6 - Implementar um contador de reações

    - O contador deve ser incrementado sempre que o botão for clicado
    - Mostra o número de reações
    - (Bonus) Guarda o número de reações no localStorage e acessa o valor guardado ao carregar a página
*/}


function useLocalStorage(storageItem: string, defaultValue: number): [number, (value: number) => void] {
    const [value, setValue] = useState(localStorage.getItem(storageItem) ?? defaultValue);

    useEffect(() => {
        localStorage.setItem(storageItem, value.toString());
    }, [storageItem, value]);

    return [Number(value), setValue];
}


export default function Counter({ resourceId }: Props) {
    const [counter, setCounter] = useLocalStorage(resourceId, 0);

    return (
        <div className="flex justify-between gap-2">
            <p>Reacted with this resource {counter} times</p>
            <button
                className="inline-flex size-4 transition-colors hover:text-accent-foreground"
                onClick={() => setCounter(counter + 1)}
            >
                <PlusIcon size={16} />
            </button>
        </div>
    )
}
