import PaidIcon from "@mui/icons-material/Paid";
import { Chip } from "@mui/material";

export function Total(props: { total: number }) {
  return (
    <Chip
      label={`Total - ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(props.total)}`}
      sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
      color="primary"
      icon={<PaidIcon />}
    />
  );
}
