import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Link } from "react-router-dom";

const AmenitiesSection = () => {
  // Data for amenities to enable mapping
  const amenities = [
    {
      id: 1,
      name: "Olympic Pool",
      description: "25m indoor heated pool",
      status: "Operational",
      statusColor: "#4caf50",
      hours: "6AM-10PM",
      lastMaintenance: "2024-01-15",
    },
    {
      id: 2,
      name: "Weight Room",
      description: "Full set of free weights and machines",
      status: "Maintenance",
      statusColor: "#ff5252",
      hours: "24/7",
      lastMaintenance: "2024-01-20",
    },
    {
      id: 3,
      name: "Cardio Zone",
      description: "Treadmills, bikes, ellipticals",
      status: "Operational",
      statusColor: "#4caf50",
      hours: "24/7",
      lastMaintenance: "2024-01-18",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-[#0b294b] text-[32px] leading-[48px]">
          Amenities Management
        </h1>

        <Link to="/manageru95gymu95addamenity">
          <Button className="bg-[#0b294b] text-white font-bold">
            Add Amenity
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {amenities.map((amenity) => (
          <Card key={amenity.id} className="bg-[#e9ecef] border-none">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-bold text-[#0b294b] text-2xl leading-9">
                      {amenity.name}
                    </h2>
                    <p className="font-normal text-black text-base leading-6 mt-2">
                      {amenity.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="h-10 w-[58px] bg-[#0b294b] text-white">
                      Edit
                    </Button>
                    <Button className="h-10 w-[76px] bg-[#ff525220] text-[#ff5252] hover:bg-[#ff525230]">
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div>
                    <p className="font-normal text-black text-base leading-6">
                      Status
                    </p>
                    <p
                      className="font-bold text-base leading-6"
                      style={{ color: amenity.statusColor }}
                    >
                      {amenity.status}
                    </p>
                  </div>
                  <div>
                    <p className="font-normal text-black text-base leading-6">
                      Hours
                    </p>
                    <p className="font-normal text-black text-base leading-6">
                      {amenity.hours}
                    </p>
                  </div>
                  <div>
                    <p className="font-normal text-black text-base leading-6">
                      Last Maintenance
                    </p>
                    <p className="font-normal text-black text-base leading-6">
                      {amenity.lastMaintenance}
                    </p>
                  </div>
                  <div className="flex-grow"></div> {/* Spacer */}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dialog for adding/editing amenity - shown in the image but not in original code */}
      <Dialog>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Amenity</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <Input id="name" placeholder="Enter amenity name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <Textarea id="description" placeholder="Enter description" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="hours" className="text-sm">
                Operating Hours
              </label>
              <Input id="hours" placeholder="e.g. 6AM-10PM or 24/7" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="status" className="text-sm">
                Status
              </label>
              <Select defaultValue="operational">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="operational">Operational</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" className="mr-2">
              Cancel
            </Button>
            <Button className="bg-[#0b294b]">Create Amenity</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AmenitiesSection;