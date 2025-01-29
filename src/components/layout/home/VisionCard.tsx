import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";

interface VisionCardProps {
  title: string;
  description: string;
  additionalInfo?: string;
}

const VisionCard: React.FC<VisionCardProps> = ({
  title,
  description,
  additionalInfo,
}) => (
  <motion.div
    className='col-span-1'
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className='shadow-lg p-8 rounded-lg border h-full'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-lg mt-4'>{description}</p>
      {additionalInfo && (
        <p className='text-sm mt-2'>{additionalInfo}</p>
      )}
    </Card>
  </motion.div>
);
export default VisionCard;
