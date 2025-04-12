import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ProductCategory } from "@/app/constant/productCategoryData";
import React from "react";

export default function ProductSidebar({}) {
  return (
    <aside className=" hidden lg:block w-64 border-r  bg-muted/20">
      <div className="h-screen overflow-y-auto">
        <div className=" p-4">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Categories</h2>

            <div className="space-y-4">
              {ProductCategory.map((parent) => (
                <div key={parent.id}>
                  {/* Parent category */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`parent-${parent.id}`} />
                    <Label
                      htmlFor={`parent-${parent.id}`}
                      className="text-base font-medium"
                    >
                      {parent.name}
                    </Label>
                  </div>

                  {/* Child categories */}
                  {Array.isArray(parent.childCategory) &&
                    parent.childCategory.length > 0 && (
                      <div className="ml-6 mt-2 space-y-2">
                        {parent.childCategory.map((child) => (
                          <div
                            key={child.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={`child-${child.id}`} />
                            <Label
                              htmlFor={`child-${child.id}`}
                              className="text-sm"
                            >
                              {child.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          {/* Price Range Filter */}
          <div>
            <h3 className="text-base font-medium mb-2">Price Range</h3>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label htmlFor="min">Min</Label>
                <Input id="min" type="number" placeholder="0" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="max">Max</Label>
                <Input id="max" type="number" placeholder="1000" />
              </div>
            </div>
          </div>
          <div className=" h-[200px] border border-green-500"></div>
        </div>
      </div>
    </aside>
  );
}
