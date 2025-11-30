import { Request, Response, NextFunction } from "express";
  
export const Logger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();
  const time = new Date().toISOString();

  const isNotEmpty = (obj: any) =>
    obj && typeof obj === "object" && Object.keys(obj).length > 0;

  const logSection = (title: string, content: any) => {
    if (!isNotEmpty(content)) return;

    console.log(`\n========= ${title} =========`);
    for (const [key, value] of Object.entries(content)) {
      console.log(`${key}:`, value);
    }
  };

  console.log("\n==================== REQUEST LOG ====================");

  console.log("time:", time);
  console.log("method:", req.method.toUpperCase());
  console.log(
    "url:",
    `${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  // conditional checks
  logSection("PARAMS", req.params);
  logSection("QUERY", req.query);

  // Mask sensitive fields
  const body =
    isNotEmpty(req.body) && typeof req.body === "object"
      ? { ...req.body, password: req.body?.password ? "********" : undefined }
      : null;

  logSection("BODY", body);

  // after response finishes
  res.on("finish", () => {
    const duration = Date.now() - start;

    console.log("\n======= RESPONSE =======");
    console.log("status:", res.statusCode);
    console.log("duration:", `${duration} ms`);

    console.log(`${'='.repeat(55)}\n`);
  });

  next();
};
