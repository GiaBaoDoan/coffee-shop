import { BASE_URL } from "@/constants/api";
import { fetcher } from "@/lib/fetcher";
import { ResponseDataApi } from "@/types/api";
import { CheckoutRequest } from "@/types/checkout";
import { Order } from "@/types/order";

export async function checkoutApi(
  checkoutData: CheckoutRequest
): Promise<Order | null> {
  try {
    const json = await fetcher<ResponseDataApi<Order | null>>(
      `${BASE_URL}/api/orders`,
      {
        method: "POST",
        body: JSON.stringify({ data: checkoutData }), // Strapi yêu cầu bọc trong "data"
      }
    );

    return json.data;
  } catch (err) {
    console.error("Error creating order:", err);
    return null;
  }
}
