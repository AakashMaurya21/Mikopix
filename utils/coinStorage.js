// utils/coinStorage.js
import * as SecureStore from "expo-secure-store";
import coinEvents from "@/utils/coinEvents";

const COIN_KEY = "mikopix_coins";
const INIT_KEY = "coins_initialized";

// Get current coin count
export async function getCoins() {
  const coins = await SecureStore.getItemAsync(COIN_KEY);
  return coins ? parseInt(coins, 10) : 0;
}

// Set coin count
export async function setCoins(value) {
  await SecureStore.setItemAsync(COIN_KEY, value.toString());
}

// Add coins (used in store.js)
export async function addCoins(amount) {
  const current = await getCoins();
  const updated = current + amount;
  await setCoins(updated);
  coinEvents.emit("coinsUpdated", updated);
  return updated;
}
export async function deductCoins(amount) {
    const current = await getCoins();
    const updated = current - amount;
    await setCoins(updated);
    coinEvents.emit("coinsUpdated", updated);
    return updated;
  }

// Initialize coins ONCE on first install
export async function initializeCoinsOnce() {
  const isInitialized = await SecureStore.getItemAsync(INIT_KEY);
  if (!isInitialized) {
    await setCoins(10); // First-time coin drop
    await SecureStore.setItemAsync(INIT_KEY, "true");
    return 0;
  }
  return getCoins();
}
