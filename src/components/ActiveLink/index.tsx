import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children:  ReactElement
    activeClassName: string
}

export function ActiveLink({activeClassName, children, ...otherProps}: ActiveLinkProps){
    const {asPath} = useRouter();

    const className = asPath === otherProps.href ? activeClassName : "";

    return(
        <Link {...otherProps}> 
            {cloneElement(children,{className,})} 
        </Link>
    )
}

