import React, { useState } from "react";
import clsx from "clsx";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/atoms/Select/select";

interface LimitSelectProps {
  placeholder: string;
  error?: string;
  defaultValue?: LimitSelectMap;
  onChange?: (value: string) => void;
  options: { name: string; value: string }[];
  className?: string;
}

export type LimitSelectMap = "10" | "20" | "30" | "40" | "50";

const LimitSelect = ({ onChange, options, className, placeholder, defaultValue }: LimitSelectProps) => {
  const [selected, setSelected] = useState<null | LimitSelectMap>(defaultValue ?? null);
  const handleSelected = (value: LimitSelectMap) => {
    setSelected(value);
    onChange?.(value);
  };
  return (
    <div
      className={clsx(
        "radix-state-open:ring radix-state-open:ring-light-orange-5",
        " cursor-pointer text-base items-center overflow-x-hidden",
        "bg-background text-light-slate-10 rounded-lg min-w-max",
        className
      )}
    >
      <Select onValueChange={handleSelected}>
        <SelectTrigger
          className={clsx(
            " radix-state-open:border-light-orange-9",
            "relative text-sm items-center overflow-x-hidden",
            "bg-background text-light-slate-12 dark:text-dark-slate-12 min-w-max w-full border-light-slate-6"
          )}
          selectIcon={
            <div className="relative pr-4">
              <RiArrowUpSLine size={16} className="absolute -top-3" />
              <RiArrowDownSLine size={16} className="absolute -bottom-3" />
            </div>
          }
        >
          <div className="mr-2">
            <span className="inline-flex mr-1 text-light-slate-9 dark:text-dark-slate-9">Showing:</span>
            <SelectValue>
              {selected ? options.find((option) => option.value === selected)?.name : placeholder}
            </SelectValue>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-background">
          {options.map((option) => (
            <SelectItem
              className={clsx(
                "radix-highlighted:bg-light-orange-3 radix-highlighted:text-light-orange-11",
                "flex items-center text-sm px-4 py-2 md:py-1",
                "relative cursor-pointer rounded-md outline-none text-light-slate-12 dark:text-dark-slate-12"
              )}
              value={option.value as unknown as string}
              key={option.name}
            >
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LimitSelect;
