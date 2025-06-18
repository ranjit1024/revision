import {Score} from "@/components/ui/score"
export default function Home(){
    return <div className="h-[90vh]">
        <div className="space-y-5 bg-white p-5 rounded-2xl shadow">
            <div>
            <h1 className="text-[1.5rem] text-gray-700 font-semibold mb-2">Topic Name</h1>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores suscipit id possimus non eveniet fuga eius, illo odit impedit praesentium! Accusamus quisquam quam iusto libero id optio molestiae quasi eum.</h1>
            </div>

            <div className="mt-10 ml-1">
                <p className="text-sm font-medium text-accent-foreground">Revion / Upcomming revison</p>
            </div>

            <div className="mt-1 flex gap-5 flex-wrap">
                <Score/>
                <Score/>
                <Score/>
                <Score/>
                <Score/>
                <Score/>
                <Score/>
            </div>

        </div>
    </div>
}