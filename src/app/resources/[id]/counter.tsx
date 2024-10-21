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
export default function Counter({ resourceId }: Props) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const storedCounter = localStorage.getItem(resourceId);
        if (storedCounter) {
            setCounter(parseInt(storedCounter));
        }
    }, []);

    const incrementCounter = () => {
        setCounter(counter + 1);
        localStorage.setItem(resourceId, (counter + 1).toString());
    }

    return (
        <div className="flex justify-between gap-2">
            <p>Reacted with this resource {counter} times</p>
            <button
                className="inline-flex size-4 transition-colors hover:text-accent-foreground"
                onClick={incrementCounter}
            >
                <PlusIcon size={16} />
            </button>
        </div>
    )
}