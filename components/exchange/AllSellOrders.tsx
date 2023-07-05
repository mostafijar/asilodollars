import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

import BuyTable from "./BuyTable";
const AllSellOrders = ({ OpenBooksell, show }: any) => {
  const { t } = useTranslation("common");
  const { dashboard } = useSelector((state: RootState) => state.exchange);
  return (
    <div className="buy-order">
      <div className="trades-table">
        <div className="trades-table-header">
          <div className="trades-table-row" />
        </div>
        <div className="trades-table-body" />
        <div
          id="exchangeAllBuyOrders_wrapper"
          className="dataTables_wrapper no-footer">
          <div
            id="exchangeAllBuyOrders_processing"
            className="dataTables_processing"
            style={{ display: "none" }}>
            {t("Processing")}...
          </div>
          <div className="dataTables_scroll">
            <div
              className="dataTables_scrollHead"
              style={{
                overflow: "hidden",
                position: "relative",
                border: "0px",
                width: "100%",
              }}>
              <div
                className="dataTables_scrollBody"
                style={{
                  position: "relative",
                  overflow: "auto",
                  height: "244px",
                  width: "100%",
                }}>
                <table
                  id="exchangeAllSellOrders"
                  className="table dataTable no-footer"
                  role="grid"
                  style={{ width: "100%" }}>
                  <thead>
                    <tr role="row" className="trade_tableList">
                      <th
                        className="table-col price sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "170.656px" }}
                        aria-label="Price">
                        {t("Price")}({dashboard?.order_data?.base_coin})
                      </th>
                      <th
                        className="table-col amount sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "120.75px" }}
                        aria-label="Amount">
                        {t("Amount")}({dashboard?.order_data?.trade_coin})
                      </th>
                      <th
                        className="table-col time sorting_desc"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "79.8438px" }}
                        aria-label="Time">
                        {t("Total")}
                      </th>
                    </tr>
                  </thead>
                  <BuyTable buy={OpenBooksell} show={show} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSellOrders;
