import { motion } from "framer-motion";
import { SEASON_DATES } from "./PropertiesPreview";

interface RateSet {
  single: number;
  double: number;
  triple: number;
  family: number;
}

interface RatesData {
  title: string;
  fullBoard: { peak: RateSet; high: RateSet; low: RateSet };
  safariPackage: { peak: RateSet; high: RateSet; low: RateSet };
}

interface RatesTableProps {
  rates: RatesData;
  activities: { activity: string; price: string }[];
  childPolicy: { rule: string; rate: string }[];
}

const RateGrid = ({ title, data }: { title: string; data: { peak: RateSet; high: RateSet; low: RateSet } }) => (
  <div className="mb-10">
    <h4 className="font-heading text-xl md:text-2xl font-light mb-6">{title}</h4>
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-body border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-medium text-muted-foreground text-xs tracking-wider uppercase">
              Rates Per Person in US$
            </th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground text-xs tracking-wider uppercase">
              Peak Season
            </th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground text-xs tracking-wider uppercase">
              High Season
            </th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground text-xs tracking-wider uppercase">
              Low Season
            </th>
          </tr>
          <tr className="border-b border-border bg-secondary/50">
            <td className="py-2 px-4 text-xs text-muted-foreground font-medium">
              Valid from Jan 01st - Dec 31 2026
            </td>
            <td className="py-2 px-4 text-xs text-muted-foreground text-center whitespace-pre-line">
              {SEASON_DATES.peak}
            </td>
            <td className="py-2 px-4 text-xs text-muted-foreground text-center whitespace-pre-line">
              {SEASON_DATES.high}
            </td>
            <td className="py-2 px-4 text-xs text-muted-foreground text-center whitespace-pre-line">
              {SEASON_DATES.low}
            </td>
          </tr>
        </thead>
        <tbody>
          {(["single", "double", "triple", "family"] as const).map((room) => (
            <tr key={room} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
              <td className="py-3 px-4 font-medium capitalize">
                {room === "family" ? "Family Room" : `${room.charAt(0).toUpperCase() + room.slice(1)} Room`}
              </td>
              <td className="py-3 px-4 text-center">{data.peak[room].toLocaleString()}</td>
              <td className="py-3 px-4 text-center">{data.high[room].toLocaleString()}</td>
              <td className="py-3 px-4 text-center">{data.low[room].toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const RatesTable = ({ rates, activities, childPolicy }: RatesTableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <h3 className="font-heading text-2xl md:text-3xl font-light mb-2">
        2026 Rates
      </h3>
      <div className="separator-line !ml-0 !mb-8" />

      <RateGrid title="Full Board Rate" data={rates.fullBoard} />
      <RateGrid title="Safari Game Package Rate" data={rates.safariPackage} />

      {/* Child Policy */}
      <div className="mb-10">
        <h4 className="font-heading text-lg font-medium mb-4">Child Policy</h4>
        <div className="space-y-2">
          {childPolicy.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border/30">
              <span className="text-sm text-foreground">{item.rule}</span>
              <span className="text-sm text-primary font-medium">{item.rate}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activities & Extras */}
      <div>
        <h4 className="font-heading text-lg font-medium mb-4">Activities & Extras</h4>
        <div className="space-y-2">
          {activities.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border/30">
              <span className="text-sm text-foreground">{item.activity}</span>
              <span className="text-sm text-primary font-medium whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RatesTable;
