import { footerData, simpleFooterData } from "@/lib/data/footer-data";
export function simpleFooter() {
	return (
		<footer className="border-border/40 border-t py-6 md:px-8 md:py-0 dark:border-border">
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
				<p className="text-balance text-center text-muted-foreground text-sm leading-loose md:text-left">
					{simpleFooterData?.texts.map((item, index) => (
						<>
							{item.pretext}{" "}
							<a
								key={index}
								href={item.url}
								target="_blank"
								rel="noreferrer"
								className="font-medium underline underline-offset-4"
							>
								{item.label}
							</a>
							.
						</>
					))}
				</p>
			</div>
		</footer>
	);
}
