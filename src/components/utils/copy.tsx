"use client";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Copy as CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TCopy = {
  copyContent: string;
  className?: string;
  iconClassName?: string;
  children?: React.ReactNode;
} & ButtonProps;

export function CopyButton({
  copyContent,
  className,
  variant,
  iconClassName,
  size = "icon",
  children,
  ...props
}: TCopy) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyContent);
      toast({
        title: "Copied!",
        description: `Content: ${copyContent}`,
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast({
        title: "Error",
        description: "Failed to copy the link. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={size}
            className={cn(
              "disabled:opacity-100 px-4 flex items-center gap-2",
              className
            )}
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            disabled={copied}
            {...props}
          >
            <div
              className={cn("transition-all relative h-full w-full  size-4")}
            >
              <Check
                className={cn(
                  "stroke-emerald-500 absolute transition-all left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
                  iconClassName,
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
                size={16}
                strokeWidth={3}
                aria-hidden="true"
              />
              <CopyIcon
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className={cn(
                  "absolute transition-all left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                )}
              />
            </div>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs z-50" showArrow={true}>
          Click to copy
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}