import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2 } from "lucide-react";

export default function Marketing() {
  return (
    <div className="w-full max-w-md mx-auto relative h-full py-2">
      <Card className="overflow-hidden border border-neutral-800 pb-2 shadow-lg ">
        <CardContent className="p-0">
          {/* Browser Header */}
          <div className="bg-neutral-900 px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative p-8 bg-neutral-950 h-64 overflow-hidden">
            <div className="flex items-end justify-center gap-3 h-full">
              {/* Chart Bars */}
              <div className="w-8 h-16 bg-neutral-500 rounded-t-full"></div>
              <div className="w-8 h-24 bg-neutral-500 rounded-t-full"></div>
              <div className="w-8 h-20 bg-neutral-500 rounded-t-full"></div>
              <div className="w-8 h-32 bg-neutral-500 rounded-t-full"></div>
              <div className="w-8 h-24 bg-neutral-500 rounded-t-full"></div>
              <div className="w-8 h-40 bg-orange-400 rounded-t-full"></div>
            </div>

            {/* Large White Overlay - covers much more of the chart area */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black  via-black/80 to-transparent pointer-events-none"></div>

            {/* Bottom white section for Share button */}
            <div className="absolute bottom-0 left-0 right-0  bg-black border border-neutral-300 rounded-l-full rounded-r-full pointer-events-none flex justify-end items-center w-10/12 mx-auto p-3 px-5">
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-6 py-2 shadow-2xl border-0"
                style={{
                  boxShadow:
                    "0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* before Tooltip */}
            <div className="absolute top-16 left-12">
              <div className="relative">
                <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Without us
                </div>
                {/* Pointer arrow pointing down-right */}
                <div className="absolute top-full left-3 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-gray-800 transform rotate-45"></div>
              </div>
            </div>

            {/* After Tooltip */}
            <div className="absolute top-12 right-8">
              <div className="relative">
                <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                  With us
                </div>
                {/* Pointer arrow pointing down-left */}
                <div className="absolute top-full right-3 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-gray-800 transform -rotate-45"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6 space-y-2 absolute bottom-10 ">
        {/* <h2 className="text-2xl font-bold ">Superb Analytics</h2> */}
        <p className="text-gray-400 leading-relaxed">
          Revolutionize your business with our marketing solutions.
        </p>
      </div>
    </div>
  );
}
