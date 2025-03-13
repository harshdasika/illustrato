"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Search } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#0a1929] text-white">
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-full pl-8 bg-white/10 text-white placeholder:text-gray-400 border-gray-700"
            />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-white/5" />
            <div className="aspect-video rounded-xl bg-white/5" />
            <div className="aspect-video rounded-xl bg-white/5" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-white/5 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
