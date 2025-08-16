'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { UseSelector } from "react-redux"

export function Preview() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline">
                    Preview schedule
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle># Rust</DialogTitle>
                    <DialogDescription className="mb-2">
                        Notes will be generated with AI. Your practice test will be curated
              from these notes and upcoming sessions.
                    </DialogDescription>
                </DialogHeader>
               <div className="grid grid-cols-2">
                <div className="border ">
                    <h1 className="border-b-1 text-center font-medium p-1 ">#session</h1>
                    <p className="p-1 text-center">1</p>
                </div>
                <div className="border ">
                    <h1 className="border-b-1 text-center font-medium p-1">Date</h1>
                     <p className="p-1 text-center ">12 nov 2025</p>
                </div>
               </div>
                 
                <DialogFooter className="sm:justify-start mt-2">
                    <DialogClose asChild>
                        <Button type="button" variant='outline' >
                            OK
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
