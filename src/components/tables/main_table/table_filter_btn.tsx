import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export function TableFilterButton(){

    return(
        <div>
            
            <Button variant={"outline"}>
            <Filter className="text-gray-400"/>
            Filter</Button>
        </div>
    )
}