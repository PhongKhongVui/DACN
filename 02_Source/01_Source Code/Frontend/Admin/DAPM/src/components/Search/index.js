function Search({placeholder, onChange}) {
    const ref = useRef();
    
    return <form>
        <input className="px-3 h-8 text-[13px] rounded border border-gray-300 outline-none active:border-[--primary]" placeholder={placeholder} />
    </form>
}