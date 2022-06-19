import { data } from "../../../data";

export default function dateHandler(req, res) {
    const { date } = req.query;
    const dateData = data.find(item => item.date === date);
    if (dateData) {
        res.status(200).json(dateData);
    } else {
        res.status(404).json({ message: "Date not found" });
    }

}