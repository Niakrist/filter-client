"use client";
import useFilterStore from "@/store/store"
import { Button } from "@/ui"
import { RefreshCcw } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export const ResetButton = () => {
    const { reset } = useFilterStore()

    const router = useRouter()
    const pathname = usePathname()

    const handleResetFilter = () => {
        reset()
        router.replace(pathname)
    }

    return <Button variant="outline" onClick={handleResetFilter}>
        <RefreshCcw />
    </Button>

}