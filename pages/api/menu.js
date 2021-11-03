import { menu } from '../../data/menu';

export default function handler(req, res) {
  res.status(200).json(menu);
}
