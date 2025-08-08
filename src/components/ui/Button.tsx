

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
};

export function Button({ children, onClick, type = "button" }: Props) {
    return <>
        <button type={type} onClick={onClick} className="px-3 py-2 text-xs gap-2 font-bold text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 leading-[1.5] transition">{children}</button>
    </>
}
