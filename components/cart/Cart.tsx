"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
// import { formatCurrency } from "@/lib/utils"
// import { useCart } from "@/components/cart-provider"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "../ui/scroll-area";
// import { useCart } from "@/context/cartContext";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export function Cart() {
  const [open, setOpen] = useState(false);
  // const { items, removeItem, updateQuantity, totalItems, totalPrice } =
  //   useCart();
  const items = useSelector((state: RootState) => state.cart.items);
  console.log(items, "items");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative rounded-full">
          <ShoppingCart className="h-5 w-5" />
          {/* {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {totalItems}
            </span>
          )} */}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg p-5">
        <SheetHeader className="px-1">
          {/* <SheetTitle>Your Cart ({totalItems})</SheetTitle> */}
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 py-4">
              <div className="space-y-4 px-1">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 overflow-hidden rounded-md border">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {/* <p className="text-sm text-muted-foreground">{formatCurrency(item.price)}</p> */}
                          <p className="text-sm text-muted-foreground">
                            {item.price}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          // onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          // onClick={() =>
                          //   updateQuantity(item.id, item.quantity - 1)
                          // }
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-10 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          // onClick={() =>
                          //   updateQuantity(item.id, item.quantity + 1)
                          // }
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 px-1">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  {/* <span>{totalPrice}</span> */}
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  {/* <span>{totalPrice}</span> */}
                </div>
              </div>
              <Button
                className="w-full"
                size="lg"
                onClick={() => setOpen(false)}
              >
                Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            <div className="text-center">
              <h3 className="text-lg font-medium">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground">
                Add items to your cart to see them here.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
