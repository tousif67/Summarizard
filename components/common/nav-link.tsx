 'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = (
    {href, children,className}
    :{
        href:string, 
        children:React.ReactNode,
         className?:string}) => {
            const pathname = usePathname();
            const isActive = pathname === href || pathname !== '/' && href.startsWith((href));
    return (
        <Link href={href} 
        className={cn('transition-colors text-sm duration-200 text-gray-600 hover:text-amber-500',className,
            isActive && 'text-amber-500'
        )}
        >
            {children}
        </Link>
    )
}







