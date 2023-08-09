import { useState } from "react"
import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    const [isActivityOpen, setIsActivityOpen] = useState(false)

    const toggleActivityMenu = () => {
        setIsActivityOpen(!isActivityOpen)
    }

    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center bg-gray-500">
            <h1 className="py-4 px-4 font-bold text-3xl">ETHEREUM BANKING</h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6 hover:text-slate-100 focus:ring focus:ring-violet-300 hover:bg-sky-700 active:bg-violet-700">
                        DEPOSITE
                    </a>
                </Link>
                <Link href="/withdraw">
                    <a className="mr-4 p-6 hover:text-slate-100 focus:ring focus:ring-violet-300 hover:bg-sky-700 active:bg-violet-700">
                        WITHDRAW
                    </a>
                </Link>
                <Link href="/balance">
                    <a className="mr-4 p-6 hover:text-slate-100 focus:ring focus:ring-violet-300 hover:bg-sky-700 active:bg-violet-700">
                        BALANCE
                    </a>
                </Link>
                <Link href="/feedback">
                    <a className="mr-4 p-6 hover:text-slate-100 focus:ring focus:ring-violet-300 hover:bg-sky-700 active:bg-violet-700">
                        FEEDBACK
                    </a>
                </Link>

                <div className="relative">
                    <button
                        onMouseEnter={toggleActivityMenu}
                        className="mr-4 p-6 hover:text-slate-100 focus:ring focus:ring-violet-300 hover:bg-sky-700 active:bg-violet-700"
                    >
                        ACTIVITY
                    </button>
                    {isActivityOpen && (
                        <div className="absolute w-auto mt-2 p-2 bg-white border border-red-300 rounded shadow-md">
                            <Link href="/activity/selfDeposite">
                                <a className="block p-2 hover:underline underline-offset-4 hover:bg-blue-500 rounded">
                                    selfDeposite
                                </a>
                            </Link>
                            <Link href="/activity/depositeOthers">
                                <a className="block p-2 hover:underline underline-offset-4 hover:bg-blue-500 rounded">
                                    depositeOthers
                                </a>
                            </Link>
                            <Link href="/activity/selfWithdraw">
                                <a className="block p-2 hover:underline underline-offset-4 hover:bg-blue-500 rounded">
                                    withdraw
                                </a>
                            </Link>
                            <Link href="/activity/transfer">
                                <a className="block p-2 hover:underline underline-offset-4 hover:bg-blue-500 rounded">
                                    transfer
                                </a>
                            </Link>
                        </div>
                    )}
                </div>

                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
