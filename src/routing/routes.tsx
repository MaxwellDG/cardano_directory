// Centralized route segments for easier lookup and debugging
export const ROUTE_SEGMENTS = {
    ROOT: "/",
    CONTRACTS: "contracts",
    WALLET: "wallet",
    LAW: "law",
    TRANSACTIONS: "transactions",
}

const ROOT = ROUTE_SEGMENTS.ROOT
const CONTRACTS = `/${ROUTE_SEGMENTS.CONTRACTS}`
const WALLET = `/${ROUTE_SEGMENTS.CONTRACTS}/${ROUTE_SEGMENTS.WALLET}`
const LAW = `/${ROUTE_SEGMENTS.CONTRACTS}/${ROUTE_SEGMENTS.LAW}`
const TRANSACTIONS = `/${ROUTE_SEGMENTS.CONTRACTS}/${ROUTE_SEGMENTS.TRANSACTIONS}`

export const ROUTES = {
    ROOT,
    CONTRACTS,
    WALLET,
    LAW,
    TRANSACTIONS,
}
