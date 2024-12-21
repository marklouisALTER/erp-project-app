import type { Meta, StoryObj } from "@storybook/react";
import { ProductSummary } from "@/components/dashboard/Cards/ProductSummary";
import { Descriptions } from "antd";

const meta = {
  title: "Components/Dashboard/ProductSummary",
  component: ProductSummary,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Product Summary",
    Descriptions: [
        {
            label: "Total Product Order",
            value: "258",
            percentage: "22%",
            trend: "up",
        },
        {
            label: "Estimated Shipping",
            value: "142",
            percentage: "27%",
            trend: "down",
        },
        {
            label: "Approved products",
            value: "116",
            percentage: "35%",
            trend: "up",
        },
        ],
  }
} satisfies Meta<typeof ProductSummary>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ProductSummaryCard: Story = {};
